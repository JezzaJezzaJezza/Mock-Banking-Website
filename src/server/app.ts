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

/*
    Retrieve a user by their unique ID
*/
app.get("/user/:id", async(req, resp) => {
	const user =  await UserController.getByID(req.params.id)
    resp.send(user)
})

/*
    Retrieve an account by their unique ID
*/
app.get("/account/:id", async(req, resp)=>{
	const account = await AccountController.getByID(req.params.id)
	resp.send(account)
})

/*
    Retrieve all transactions belonging to a particular account specified by the account ID

    The listed transactions should state amount in/out, sort code and account number
    needs to do ^^ for all transactions - should be easy with a query
*/
app.get("/account/transactions/:account_id", async(req, resp)=>{
	const transactions = await TransactionController.getAllByID(req.body.account_id)
	resp.send(transactions)
})

/*
    Create a new user, add it to the database
*/
app.post("/users", async(req, resp)=>{
	const new_user = new User()
    new_user.username = req.body.username
	new_user.password = req.body.password
	new_user.first_name = req.body.first_name
	new_user.middle_name = req.body.middle_name
	new_user.last_name = req.body.last_name
	new_user.email_address = req.body.email_address
	new_user.dob = new Date(req.body.dob)
    await UserController.insert(new_user)
	resp.status(204).send()
})

/*
    Create a new account, add it to the database
    Will need to assign it a sort code and account number (mock)	
*/
app.post("/accounts", async(req, resp)=>{
	const new_account = new Account()
	new_account.user_id = req.body.user_id
	new_account.account_no = "123456789"
	new_account.sort_code = "123456"
	new_account.account_type_id = req.body.account_type_id
	await AccountController.insert(new_account)
	resp.status(204).send()
})

/*
    // Remove an account from a specific user
*/
app.delete("/accounts", async(req, resp)=>{
	resp.status(204).send()
})

/*
    Create a transaction, add it to the database
*/
app.post("/user_details/accounts/transactions", async(req, resp)=>{
	const new_transaction = new Transaction()
	new_transaction.account_id = req.body.account_id
	new_transaction.transaction_content = req.body.trans_content
	new_transaction.transaction_value = req.body.trans_val
	new_transaction.transaction_category_id = req.body.trans_cat_id
	// Not too sure what the category stuff is, so probably can delete it if decided not to be used.
	await TransactionController.insert(new_transaction)
	resp.status(204).send()
})

export default app;