const devConfig = {
	client:'mysql',           //Nombre del driver de BD
	connection: {		  //Configurar conexion con servidor
	host: '127.0.0.1',
	port:'3306',
	user: 'concarneau',
	password:'l43t1t14',
	database:'Dev_Jobs'
},
migrations:{
 directory: './src/database/migrations'
},
seeds:{
  directory:'./src/database/seeds'
}
};


module.exports = {		//Aqui exporto el modulo
 development: devConfig,
 production: {}
}
