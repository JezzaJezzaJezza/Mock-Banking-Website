import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/user.entity"
import { Account } from "./entity/account.entity"
import { Branch } from "./entity/branch.entity"
import { AccountType } from "./entity/account_type.entity"
import { Transaction } from "./entity/transaction.entity"
import { TransactionCategory } from "./entity/transaction_category.entity"

const PATH_TO_DATABASE = "./database.sqlite"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: PATH_TO_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Account, Branch, AccountType, Transaction, TransactionCategory],
})


export async function ensureInitialisedDB() {
    if (AppDataSource.isInitialized) {
        return;
    }

    await AppDataSource.initialize()
    .then(() => {
        console.log("Database initialised");
    })
    .catch(error => {
        console.error(error);
    })
}