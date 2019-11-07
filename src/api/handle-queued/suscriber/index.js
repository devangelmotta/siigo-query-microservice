const Product = require('../../models/query.model');
const httpStatus = require('http-status');
const getArrayFromCSV = require("../../utils/csv-reader");



// const DBSaveSuccessEmitter = require("./handle-auth-listener");
// const FutureCompletable = new DBSaveSuccessEmitter();

async function handlerConsumerTask() {
    var q = "tasks";
    var open = require("amqplib").connect("amqp://localhost");
    console.log("Starting consumer task");
    let conn = await open;
    let ch = await conn.createChannel();
    let assertQueued = await ch.assertQueue(q);
    let consumeTask = await ch.consume(q, async (msg) => {

        if (msg !== null) {
            let dataString = msg.content.toString();
            console.log("Entry consumer")
            // try {
            //     let result = await Product.find(dataString);
            //     console.log("Get data")
            //     FutureCompletable.emit("queryEvent")
            //     flag = false;
            //     res.status(httpStatus.OK);
            //     return res.json({ status: true, message: "Recovery data", data: result })

            // } catch (error) {
            //     console.log("Error")
            //     res.status(httpStatus.FORBIDDEN);
            //     return res.json({ status: false, message: error, data: [] })
            // }


        } else {
            console.log("Null message")
        }
    });
}

handlerConsumerTask()

