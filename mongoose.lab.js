console.log("hello world");

const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/";

const main = async () => {
  // connect to mongoose
  await mongoose.connect(mongoURI);
  console.log(`connect success ${mongoURI}`);

  // define schema
  const kittySchema = new mongoose.Schema({
    name: { type: String, required: true },
    // shorthand if there's only type:
    // name: String,
  });

  // custom method
  kittySchema.methods.speak = function () {
    // cant use arrow func cuz this
    const greeting = this.name
      ? `Meow name is ${this.name}`
      : "I don't have a name";
    console.log(greeting);
  };

  // create model
  const Kitten = mongoose.model("Kitten", kittySchema);

  //   // create an instant named "silence"
  //   const silence = new Kitten({ name: "silence" });
  //   silence.speak();
  //   // save to kittens collection in database
  //   await silence.save();

  // changing the name of one document

  //   const singleKitty = await Kitten.findOne({ name: "silence" }); // or use _id
  //   singleKitty.name = "not silence";
  //   await singleKitty.save();

  // // or use findOneAndUpdate with the extra param
  //   const singleKitty = await Kitten.findOneAndUpdate(
  //     { name: "not silence" },
  //     { name: "quiet" },
  //     { new: true }
  //   );

  //   await Kitten.findByIdAndDelete("64a29b55ee35b9442f782319");

  //   // create an instant named "ninja"
  //   await Kitten.create({ name: "ninja" });

  // find all
  const kittyClub = await Kitten.find({});

  //   console.log("Welcome", singleKitty);
  console.log(kittyClub);
};

main().catch((err) => console.log(err));
