import util = require("gulp-util")
import notifier = require("node-notifier")

// Standard handler
export default function standardHandler(err: any) {
  // Notification
  var notifier:any = notifier()
  notifier.notify({ message: "Error: " + err.message })
  // Log to console
  util.log(util.colors.red("Error"), err.message)
}