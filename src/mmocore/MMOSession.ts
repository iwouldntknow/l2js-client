import ServerData from "../network/ServerData";

export default class MMOSession {
    sessionId!: number;
    accountId!: number;
    authKey!: number;
    gsSessionId!: number;
    gsAccountId!: number;

    playOk1!: number;
    playOk2!: number;
    loginOk1!: number;
    loginOk2!: number;
    username!: string;
    selectedServer!: ServerData;
}