

const getJson=() =>{
    try {
        const dataBuffer = fs.readFileSync("./public/isim.json")
        const dataBufferString = dataBuffer.toString()
        const dataObject = JSON.parse(dataBufferString)

        return dataObject
    }
    catch (error) {
        return []

    }
}

module.exports={
    getJson:getJson
}