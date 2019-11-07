var q = "tasks";
var connect;
var channel;
var setQueue;

//rabbitmq:rabbitmq@rabbitmq
async function handlerQueued() {
    console.log("Publisher starting...");
    try {
        connect = await require("amqplib").connect("amqp://localhost");
        channel = await connect.createChannel();
        setQueue = await channel.assertQueue(q);
    } catch (err) {
        console.log(err);
    }
}

function setTask(objectData) {
    console.log("Set tasking...")
    try {
        channel.sendToQueue(q, Buffer.from(JSON.stringify(objectData)));
    } catch (err) {
        console.log(err);
    }
}

handlerQueued();
module.exports = {
    setTask,

};
