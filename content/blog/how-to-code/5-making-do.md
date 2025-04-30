---
title: "5. Making Do With What You Have"
description: "It's not a palace or an electric carport, but it's yours."
---

You'd love to hightail it to Blefonix State in person, but it's a long walk, and you really do need a functioning car. Plus, you're missing one simple luxury: a roof. You can't even sleep in your car because it's got no top—and you have zero clue how to fix it.

So you head back to [https://example.com](https://example.com/), determined to study this "building" so you can learn how to construct your own. Start small, right? A basic structure before you get fancy. Maybe someday you'll have a sprawling _shopping mall_ of a website, but let's not jump straight to the penthouse.

Peeling back more of the building's "paint" (in web terms, **CSS**), you find the underlying bricks (i.e., **HTML**). Floating around you like a whisper in the wind is **JavaScript**, the scripting that breathes life into any webpage. In short:

- **HTML**: The bones and organs (structure and content).  
- **CSS**: The clothes and skin (styling).  
- **JavaScript**: The brain or electricity that sparks interactivity.

## Examining the Foundation of `example.com`

Back at [https://example.com](https://example.com/), you inspect everything from top to bottom. You see a roof:

```html
<!DOCTYPE html>
```

In some places, people manage without proper roofs, but it's not pleasant—and can lead to nasty side effects. Same goes for a missing doctype. Your site might _kinda_ work, but it's less secure, and browsers might throw weird bugs your way. Plus, search engines hate confusion. This is just _one_ part of SEO and user experience, but hey, every detail counts.

Ever see a house with windows on the floor and doors on the ceiling? Me neither, but that's what happens when you misuse HTML. Browsers might guess what you intended, but your visitors (and Google) will be confused. Structure matters, so keep your `<header>` up top, `<footer>` down low, and your content in between—unless you're building a haunted house.

Though you won't find `<header>` or `<footer>` tags on `example.com`, you do see the basics: `<html>`, `<head>`, `<title>`, `<meta>`, `<style>`, `<body>`, `<div>`, `<h1>`, `<p>`, and `<a>`. A little CSS, and boom—you've got a neat wooden shelter of a website. Nothing over-the-top, but it's rock solid—like discovering ancient ruins that still stand after all these years.

## Just Build Your Own Foundation

You've finally decided to learn the basics. Rome wasn't built in a day, and neither was the world's best website. Your first mission: construct a simple **wooden hut** (an HTML/CSS page) to shelter you from the code-storm. No fancy floors, no elaborate pool—just some walls and a roof to keep out the wind.

### 1. Sketch the Layout (HTML)

So! Create and open a new `.html` file in your favorite code editor (or that shiny new AI-assisted tool). Then lay down the bare-bones structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Hut</title>
</head>
<body>
  <header>
    <h1>Welcome to My Simple Hut</h1>
  </header>

  <main>
    <p>This is my home for now. Might upgrade it later!</p>
  </main>

  <footer>
    <p>© 2024 Me, Myself & I</p>
  </footer>
</body>
</html>
```

This is your wooden framework. Humble but standing.

### 2. Give It Some Charm (CSS)

Next, add a new `.css` file and link it in the `<head>`:

```html
<link rel="stylesheet" href="styles.css" />
```

In `styles.css`:

```css
body {
  font-family: sans-serif;
  background-color: #f0ede4; /* Cozy hut vibes */
  margin: 0;
  padding: 0;
}

header, footer {
  background-color: #8c7851; /* Wood panel color */
  color: #fff;
  text-align: center;
  padding: 1rem;
}

main {
  padding: 1.5rem;
}
```

Now it's starting to look more like a home—no mind blowing currently of course—but no wind blowing straight through your code.

### 3. Add a Little Interaction (JavaScript)

If you're feeling adventurous, toss in a `.js` file:

```html
<script src="app.js"></script>
```

Then, in `app.js`:

```js
document.addEventListener('DOMContentLoaded', () => {
  alert('Hey neighbor, welcome to my little hut!');
});
```

Sure, it's just an alert box, but it's the first step toward your "smart home."

It's not a palace or an electric carport, but it's _yours_. You built it with **HTML**, **CSS**, and a pinch of **JavaScript**—that's huge! Next step? Maybe add a second floor… or better yet, figure out how to strap a roof onto your car.
