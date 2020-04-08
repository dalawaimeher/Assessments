

const messageModel = require('src/model/message');


const postMessage = async (request,reply)=>{

    let payload = request.postMessage.payload;
    const result = await messageModel.insertMany({payload});
    
};

const getMessage = async (request,reply)=>{
    let uid = request.getMessage.params,
    size = 100,
    sort ={'message':-1};

    const result = await messageModel.findOne({uid}).sort(sort).limit(size);

}

module.exports = {
    postMessage,
    getMessage
}