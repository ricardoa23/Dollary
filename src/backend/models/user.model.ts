type TUserData = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    created_at: Date;
    budgetSettings?:object;
    bankLinked: boolean;
    plaidToken?: string;
    dailyNotify: boolean;
    timeZone?: string;
}