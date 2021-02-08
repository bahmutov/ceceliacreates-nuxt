module.exports = (on, config) => {
  if (process.env.ELECTRON_EXTRA_LAUNCH_ARGS) {
    console.log('ELECTRON_EXTRA_LAUNCH_ARGS=%s', process.env.ELECTRON_EXTRA_LAUNCH_ARGS)
  } else {
    console.log('ELECTRON_EXTRA_LAUNCH_ARGS is not set')
  }


  on('task', {
    log(x) {
      console.log(x)
      return null
    }
  })
  // on('before:browser:launch', (browser, launchOptions) => {
  //   if (browser.family === 'chromium' && browser.name !== 'electron') {
  //     launchOptions.args.push('--js-flags="--expose-gc"')
  //   }

    // if (browser.name === 'electron') {
    //   launchOptions.args.push('js-flags', '--expose_gc --max-old-space-size=128')
    // }
  //   console.log('launch flags', launchOptions.args)
  //   return launchOptions
  // })
}
