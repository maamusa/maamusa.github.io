---
title: "Steal My $0 Personal Blog Setup"
description: "A non-technical guide to setting up a fully free, modern blogging website using Antigravity, Claude, and simple prompts."
pubDate: 2026-09-13
author: Mayank Musaddi
tags:
  - Tech
---

Every few months, I meet someone who says *"I want to start a blog, but I don't know how to code"* or *"Hosting and domain setups sound too complicated."* 

This post is for you. You don't need to be a software engineer to build a custom, beautiful website anymore. In fact, I built and customized this entire blog without manually typing out lines of complex code. I just **asked an AI to do it for me.**

Here is the exact playbook of how I set this up, and how you can easily do the same.

---

## 1. The Magic Setup: Antigravity + Claude

The secret sauce behind this website isn't my coding speed; it's my setup. 

I installed **Antigravity**, a powerful AI coding assistant, and connected it to **Claude**, one of the smartest AI models available right now. Instead of opening files and writing code line by line, my workflow looks like having a conversation. 

I simply open a prompt window and say things like:
> *"I want to start a new blog project. Please download this theme and set it up for me."*

The AI reads my workspace, runs the terminal commands, creates the files, and sets up the foundation while I sit back. And if I ever get stuck or don't understand a part of the setup (like how a specific tool works), I just use the AI chat section directly in the Antigravity pane to ask questions and learn on the fly.

---

## 2. Sourcing the Theme

I didn't start from an empty folder. I browsed around and found a beautiful, open-source template called [Zaduma](https://zaduma.vercel.app/). 

Once I pointed my AI assistant to it, the process was purely **prompt-driven**. I looked at the base theme and started issuing commands:
- *"Change the overall color scheme to a sleek dark mode."*
- *"Remove the default logo and replace it with my name."*
- *"Add a new section on the homepage that links to my projects."*

The AI handled all the underlying code modifications. If I didn't like how something looked, I just prompted again: *"Make that button a little more rounded and give it a subtle glow when I hover over it."*

---

## 3. The Behind-the-Scenes Stack

Even though the AI did the heavy lifting, it helps to know what tools are actually powering the site. 

- **Astro & Tailwind CSS**: The languages of the site. Astro makes the website incredibly fast by shipping pure HTML, while Tailwind CSS handles all the beautiful styling.
- **GitHub & GitHub Pages**: This is where the code lives. The best part? **GitHub Pages hosts this website completely for free.** 
- **Firebase**: I wanted readers to be able to leave comments and reactions (try clicking the emoji buttons at the bottom!). I just prompted the AI to integrate Firebase for this. It has a generous free tier, so it costs me nothing.

### The 100% Free Option vs. Custom Domain Name
Everything above is 100% free. If you don't want to spend a single penny, GitHub Pages automatically gives you a free domain name that looks like `yourusername.github.io`. You can run your entire blog on that URL forever at absolutely zero cost.

I wanted a slightly more personalized touch, so the only money I spent was **$3.48 for the entire year** to buy the custom domain name `maamusa.co` from a registrar called Spaceship. 

Linking it was a breeze. I just went to my domain settings, pointed it to GitHub's servers, and told GitHub Pages that `maamusa.co` is my custom domain. Instantly, my free hosting was connected to my professional domain name.

---

## 4. Writing New Posts is Effortless

You might be wondering: *"If it's a coded website, do I have to write code every time I want to publish a new blog post?"*

Absolutely not. The workflow is incredibly simple. 

When I want to write a new post, I don't touch any HTML. I simply create a new text file using a template in my `posts` folder. It looks like this:

```markdown
---
title: My New Blog Post
description: A short summary of what I am writing about
pubDate: 2026-09-13
---

And then I just write my thoughts here in plain text...
```

Once I am done typing out my thoughts, I just hit "Sync" to push my changes to GitHub. GitHub Actions automatically detects the new file, rebuilds the site, and updates the live website in less than a minute. 

---

## The Ultimate Takeaway

The barrier to entry for creating on the internet has never been lower. You no longer need to pay expensive monthly fees for website builders like Squarespace or Wix, and you don't need to spend months learning web development from scratch.

With tools like Antigravity and Claude, you can simply **prompt your website into existence.** 

So if you've been putting off starting that blog, let this be your sign. Get an AI assistant, find a theme you like, and start prompting.