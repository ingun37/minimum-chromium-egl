const puppeteer = require("puppeteer");

puppeteer
  .launch({
    // headless: false,
    args: ["--no-sandbox", "--disable-web-security", "--use-gl=egl"],
  })
  .then(async (browser) => 
    browser
      .newPage()
      .then((page) => page.goto("https://threejs.org/examples/#webgl_geometry_cube"))
      .then(
        (response) =>
          new Promise((done) => {
            setTimeout(done, 5000);
          })
      ).then(()=>browser.close())
  );
