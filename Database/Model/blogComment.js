const mongoose = require("mongoose");

const blogcommentSchema = new mongoose.Schema({
   username:{
    type:String,
   },
   comment:{
    type:String,
   },
   date: {
    type: Date,
    default: Date.now,
    get: function() {
        const date = new Date(this.valueOf()); // Create a new Date object based on the current value
        // Get the date in YYYY.MM.DD format
        return `${date.getFullYear()}.${this.getDateInTwoDigits(date.getMonth() + 1)}.${this.getDateInTwoDigits(date.getDate())}`;
      }
  }
});

module.exports = blogcommentSchema;