---
title: Anantam!
description: My take on visual representation of the circle of life
pubDate: 2026-06-28
author: Mayank Musaddi
tags:
  - Interactive
  - Philosophy
image:
  url: /assets/posts/circle.svg
  alt: The Interactive Circle
---
A circle that reacts to your presence! Try hovering your mouse over the outline, and see how it responds to the disturbance.

<div style="display: flex; justify-content: center; margin: 3rem 0; width: 100%;">
  <canvas id="wavyCircle" width="400" height="400" style="max-width: 100%; height: auto; cursor: crosshair;"></canvas>
</div>

<script>
  (function() {
    const canvas = document.getElementById('wavyCircle');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const cx = width / 2;
    const cy = height / 2;
    const baseRadius = 120;
    const points = [];
    const numPoints = 200;

    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * Math.PI * 2;
      points.push({
        angle,
        baseRadius,
        radius: baseRadius,
        targetRadius: baseRadius,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouse.x = (e.clientX - rect.left) * scaleX;
      mouse.y = (e.clientY - rect.top) * scaleY;
    });
    
    canvas.addEventListener('mouseleave', () => {
      mouse.x = -1000;
      mouse.y = -1000;
    });

    function draw(time) {
      // Clear with a very dark background so the neon pops
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, width, height);
      ctx.beginPath();

      for (let i = 0; i < numPoints; i++) {
        const p = points[i];
        
        // Base position of this point
        const nx = cx + Math.cos(p.angle) * p.baseRadius;
        const ny = cy + Math.sin(p.angle) * p.baseRadius;
        
        // Distance to mouse
        const dx = mouse.x - nx;
        const dy = mouse.y - ny;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let tr = p.baseRadius;
        
        if (dist < 80) {
          // Disturbance effect: extremely wavy
          const intensity = Math.pow(1 - (dist / 80), 2); // easing for smoother transition but sharper peak
          // Fast time multiplier for chaotic disturbance, and high spatial frequency (i * 0.8)
          const wave = Math.sin(time * 0.015 + i * 0.8) * 40 * intensity;
          tr = p.baseRadius + wave;
        }

        // Springy return to base or target
        p.radius += (tr - p.radius) * 0.15;

        const x = cx + Math.cos(p.angle) * p.radius;
        const y = cy + Math.sin(p.angle) * p.radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      
      ctx.closePath();
      
      const hue = (time * 0.05) % 360;
      const neonColor = `hsl(${hue}, 100%, 60%)`;
      
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      
      // We'll use globalCompositeOperation to make the glow intensely bright
      ctx.globalCompositeOperation = 'lighter';
      
      // 1. Broad outer glow - ethereal spread
      ctx.shadowBlur = 60;
      ctx.shadowColor = neonColor;
      ctx.lineWidth = 3;
      ctx.strokeStyle = neonColor;
      ctx.stroke();

      // 2. Medium inner glow - sharp intensity
      ctx.shadowBlur = 15;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // 3. Bright core - razor thin, godlike
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#ffffff';
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      
      // Reset composite operation and shadow for next frame
      ctx.globalCompositeOperation = 'source-over';
      ctx.shadowBlur = 0;

      requestAnimationFrame(draw);
    }
    
    requestAnimationFrame(draw);
  })();
</script>

I was listening to Swami Sarvapriyananda's lectures on Bhagwad Gita and he said, 
*"We humans are a mix of aatma and unaatma, while God or the enlightened ones are pure aatma. Aatma is anant or infinite and has no duality."* 

One of his disciples asked him about the meaning of Infinity or the Anantam. While most of the gurus and philosophers comfortably reside on rhetoric to answer such broad and complex question, his answer to this was particularly precise and grounded. Based on his answer I was inspired to design this animation that makes an attempt to visualize this philosophy. While not quoting him directly, I will try to describe his answer to the best of my understanding and recalling power. 

Anantam or Infinity in the Vedanta philosophy is not related to the mathematical infinity. While maths have multiple definitions of infinity, in the vedantic interpretation means **Limitless**. This limitlessness is specifically grounded in three aspects: 

- **Space** - One what is present everywhere - Omnipresent. (The empty darkness that covers the whole space)
- **Time** - Unbounded by time. A thing that never begins never ends (Just like a circle which has no beginning)
- Object - Something which can't be pointed at and objectified. As you try to visualize and point at it, suddenly there's two - you and the thing you are pointing at!

When you hover on the circle, it reacts to your presence. The disturbance or the vibrations that you are creating is that part of the human life you are acknowledging currently. The moving signals are the duality that you experience in your human form - the joy and the grief, the good and the bad, heaven and hell, me and you! The enlightened ones are the whole circle, they are not a certain section of it! They have traversed this circle multiple times, unaware of it being a circle. When they understood the whole map, they realised the futility of movement and understood this cycle - they attained *moksha*. 