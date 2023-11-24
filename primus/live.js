module.exports.go = (server) => {
    const Primus = require("primus");
    const primus = new Primus(server, {/* options */});

    primus.on('connection', (spark) => {
        console.log('HIHIHIHI MEOW MEOW HIHIHIHIHI');

        spark.on('data', (data) => {
            console.log("HIHIHIIHI DATAAAAA HIHIHIHIHI", data);

            primus.write(data); //all
            // spark.write(data); //self or 1
        });
    
    });
}