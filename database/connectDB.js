import mongoose from 'mongoose';
try {
    await mongoose.connect(process.env.DB_URI)  
    console.log('Conectado correctamente a mongo')

} catch (error) {
    console.log('Error conectando a mongo.db')
}