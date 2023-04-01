"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var TransactionController_1 = require("../db/controller/TransactionController");
var UserController_1 = require("../db/controller/UserController");
var user_entity_1 = require("../db/entity/user.entity");
var AccountController_1 = require("../db/controller/AccountController");
var account_entity_1 = require("../db/entity/account.entity");
var uuid_1 = require("uuid");
//import cors from 'cors';
var express = require('express');
var app = express();
//const corsOptions = {
//	origin: 'localhost:3000',
//	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//	allowedHeaders: ['Content-Type']
//  };
//  app.use(cors(corsOptions));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "src/App.tsx")))
app.get("/user_details", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, UserController_1.UserController.getByID(req)
                //constructs user data
            ];
            case 1:
                user = _a.sent();
                //constructs user data
                resp.send(user);
                return [2 /*return*/];
        }
    });
}); });
app.get("/user_details/accounts_details", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var acc;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, AccountController_1.AccountController.getByID(req)];
            case 1:
                acc = _a.sent();
                resp.send(acc);
                return [2 /*return*/];
        }
    });
}); });
app.get("/user_details/accounts_details/transactions_made", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var trans_det;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, TransactionController_1.TransactionController.getAllByID(req)];
            case 1:
                trans_det = _a.sent();
                resp.send(trans_det);
                return [2 /*return*/];
        }
    });
}); });
app.post("/user_create", function (req, resp) { return __awaiter(void 0, void 0, void 0, function () {
    var new_user, user_uuid;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                new_user = new user_entity_1.User();
                user_uuid = (0, uuid_1.v4)();
                new_user.username = req.body.username;
                new_user.user_id = req.body.user_uuid;
                new_user.password = req.body.password;
                new_user.first_name = req.body.first_name;
                new_user.middle_name = req.body.middle_name;
                new_user.last_name = req.body.last_name;
                new_user.email_address = req.body.email_address;
                new_user.dob = new Date(req.body.dob);
                new_user.create_time = new Date(req.body.create_time);
                return [4 /*yield*/, UserController_1.UserController.insert(new_user)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
app.post("/user_details/accounts/create", function (req, resp) {
    //new account created from a specific user
    // will need to assign it a sort code and account number (mock)	
    var new_user = new account_entity_1.Account();
});
app.post("/user_details/accounts/delete", function (req, resp) {
    //simply removes an account from a specific user
});
app.post("/user_details/accounts/transactions", function (req, resp) {
    //a user has moved money from Account A to Account B (doesn't matter abt the user)
    //subtract money from balance A and add equivalent to Account B
    //create a transaction instance and put it under both Account A and B, where A will show negation of B money in.
});
app.listen(3000);
exports["default"] = app;
