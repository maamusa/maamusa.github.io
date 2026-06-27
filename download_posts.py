import urllib.request
import re

posts = [
    {
        "url": "https://medium.com/@musaddi97/unlocking-the-power-of-language-mastering-complex-tasks-with-llm-ee820c45fe0b",
        "file": "src/content/posts/unlocking-the-power-of-language.md",
        "frontmatter": """---
title: "Unlocking the Power of Language: Mastering Complex Tasks with LLM"
description: "A comprehensive guide on leveraging Large Language Models (LLMs) to master complex tasks."
pubDate: 2023-11-20
author: "Mayank Musaddi"
image:
  url: "/demo-1.jpg"
  alt: "LLM Post Image"
---
"""
    },
    {
        "url": "https://medium.com/@musaddi97/elevate-your-app-with-a-chat-copilot-a-developers-guide-39c4b06d6ebf",
        "file": "src/content/posts/elevate-your-app-with-a-chat-copilot.md",
        "frontmatter": """---
title: "Elevate Your App with a Chat Copilot: A Developer's Guide"
description: "A developer's guide to integrating a chat copilot to elevate your application's user experience."
pubDate: 2023-11-25
author: "Mayank Musaddi"
image:
  url: "/demo-2.jpg"
  alt: "Chat Copilot Post Image"
---
"""
    },
    {
        "url": "https://blogs.iiit.ac.in/monthly_news/mayank-musaddi/",
        "file": "src/content/posts/monthly-news-mayank-musaddi.md",
        "frontmatter": """---
title: "Monthly News: Mayank Musaddi"
description: "Updates and features from the IIIT Hyderabad Monthly News."
pubDate: 2024-01-01
author: "Mayank Musaddi"
image:
  url: "/logo.webp"
  alt: "IIIT News Image"
---
"""
    }
]

for p in posts:
    req = urllib.request.Request("https://r.jina.ai/" + p["url"], headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        if "Markdown Content:" in html:
            content = html.split("Markdown Content:")[1].strip()
        else:
            content = html
        
        # Clean up some medium bloat
        content = re.sub(r'\[!\[Image.*?\]\(.*?\)\]\(.*?\)', '', content)
        content = re.sub(r'Press enter or click to view image in full size', '', content)
        content = re.sub(r'Get Mayank Musaddi’s stories in your inbox.*?Join Medium for free.*?Remember me for faster sign in', '', content, flags=re.DOTALL)
        
        with open(p["file"], "w") as f:
            f.write(p["frontmatter"] + "\n" + content)
        print(f"Successfully downloaded {p['file']}")
    except Exception as e:
        print(f"Error downloading {p['file']}: {e}")
