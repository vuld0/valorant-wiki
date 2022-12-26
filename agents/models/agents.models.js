const mongoose = require('mongoose');

const { Schema } = mongoose;

const agentSchema = new Schema({
  agentAlias: String,
  originalName: String,
  email: String,
  password: String,
  permissionLevel: Number,
});
// Once we define the schema, we can easily attach the schema to the agents model.
const Agent = mongoose.model('Users', agentSchema);

exports.createAgent = (agentData) => {
  mongoose.connect('mongodb://127.0.0.1:27017/');
  const agent = new Agent(agentData);
  return agent.save();
};
