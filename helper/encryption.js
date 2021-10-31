const bcrypt =require('bcrypt')


module.exports = {
    encrypt : (password , saltRounds = 10)=>{
        const hash = bcrypt.hashSync(password, saltRounds);
        return hash
    },
    checkPassword : (password,hash)=>{
        return bcrypt.compareSync(password, hash)
    }
}