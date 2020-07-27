const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const placeSchema = new Schema(
  {
    name: String,
    description: String,
    imgName: String,
    imgPath: String,
    imgPublicId: String,
    longitude: Number,
    latitude: Number,
    coordinates: Object,
    likes: Number,
    comments: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref:'User'
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;