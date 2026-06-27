import os
import glob
import re

for file in glob.glob("src/content/posts/*.md"):
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Remove zero width spaces
    content = content.replace("\u200b", "")
    
    # Fix spaces inside ** like ** text ** -> **text**
    content = re.sub(r'\*\*\s+(.*?)\s+\*\*', r'**\1**', content)
    content = re.sub(r'\*\*\s+(.*?)\*\*', r'**\1**', content)
    content = re.sub(r'\*\*(.*?)\s+\*\*', r'**\1**', content)
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)
