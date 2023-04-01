import { BranchController } from "../db/controller/BranchController"
import { Branch } from "../db/entity/branch.entity";
import { TransactionCategoryController } from "../db/controller/TransactionCategoryController"
import { TransactionCategory } from "../db/entity/transaction_category.entity";
import { TransactionController } from "../db/controller/TransactionController"
import { Transaction } from "../db/entity/transaction.entity";
import { UserController } from "../db/controller/UserController"
import { User } from "../db/entity/user.entity";
import { AccountController } from "../db/controller/AccountController"
import { Account } from "../db/entity/account.entity";
import { AccountTypeController } from "../db/controller/AccountTypeController"
import { AccountType } from "../db/entity/account_type.entity";
import { v4 as uuidv4 } from 'uuid';
//import cors from 'cors';
const express = require('express');
const app = express();
//const corsOptions = {
//	origin: 'localhost:3000',
//	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//	allowedHeaders: ['Content-Type']
//  };
//  app.use(cors(corsOptions));
app.use(express.json())

//app.use(express.static(path.join(__dirname, "src/App.tsx")))


app.get("/user_details", async(req, resp) => {
	const user =  await UserController.getByID(req)
	//constructs user data
    resp.send(user)
})
app.get("/user_details/accounts_details", async(req, resp)=>{
	const acc = await AccountController.getByID(req)
	resp.send(acc)
})
app.get("/user_details/accounts_details/transactions_made", async(req, resp)=>{
	//lists all transactions from the specified account - The listed transactions should state amount in/out, sort code and account number
    // needs to do ^^ for all transactions - should be easy with a query
	const trans_det = await TransactionController.getAllByID(req.body.account_id)
	resp.send(trans_det)
})

app.post("/user_create", async(req, resp)=>{
	//new user is created
	const new_user = new User()
	const user_uuid = uuidv4();
    new_user.username = req.body.username
    new_user.user_id = user_uuid
	new_user.password = req.body.password
	new_user.first_name = req.body.first_name
	new_user.middle_name = req.body.middle_name
	new_user.last_name = req.body.last_name
	new_user.email_address = req.body.email_address
	new_user.dob = new Date(req.body.dob)
	new_user.create_time = new Date(req.body.create_time)
    await UserController.insert(new_user)
	resp.status(204).send()
})
app.post("/user_details/accounts/create", async(req, resp)=>{
	//new account created from a specific user
    // will need to assign it a sort code and account number (mock)	
	const new_account = new Account()
	const account_uuid = uuidv4();
	new_account.account_id = account_uuid
	new_account.user_id = req.body.user_id
	new_account.account_no = "123456789"
	new_account.sort_code = "123456"
	new_account.account_type_id = req.body.account_type_id
	await AccountController.insert(new_account)
	resp.status(204).send()
})
app.delete("/user_details/accounts/delete", async(req, resp)=>{
	//simply removes an account from a specific user
	const acc_id = req.body.id
	const the_account = new Account()
	//await the_account.remove(acc_id);
	//remove here
	resp.status(204).send()
})
app.post("/user_details/accounts/transactions", async(req, resp)=>{
	const new_transaction = new Transaction()
	const trans_uuid = uuidv4();
	new_transaction.transaction_id = trans_uuid
	new_transaction.account_id = req.body.account_id
	new_transaction.transaction_content = req.body.trans_content
	new_transaction.transaction_value = req.body.trans_val
	new_transaction.transaction_category_id = req.body.trans_cat_id
	//not too sure what the category stuff is, so probably can delete it if decided not to be used.
	await TransactionController.insert(new_transaction)
	resp.status(204).send()
})

app.listen(3000)
export default app;