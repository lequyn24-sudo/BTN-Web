fetch('https://bitcoininfonews.com')
  .then(res => res.text())
  .then(html => {
    const matches = html.match(/https:\/\/[^"']*logo[^"']*\.(png|jpg|webp|svg)/gi);
    if (matches) {
      const unique = [...new Set(matches)];
      console.log(unique.join('\n'));
    } else {
      console.log("No logo found");
    }
  });
