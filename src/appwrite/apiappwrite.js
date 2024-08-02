import { Account, Client} from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66aa0d1f0030ccb88245');
const account = new Account(client);


export const Loginn=async(email,password)=>{
const res=await account.createEmailPasswordSession(email,password)
return res



}

export const signUp = async (name,phone,email, password ) => {
  const resultat = await account.create(name,phone,email, password);
  return resultat;
};
    
        

    
    
