import ExpenseChart from "@/app/ui/dashboard/chart/expenseChart"
import styles from "@/app/ui/dashboard/expenses/expenses.module.css"
import Rightbar from "@/app/ui/dashboard/rightbar/rightbar"

const ExpensesPage = () => {
    return (
        <div className={styles.container}>
            <ExpenseChart />
        </div>
    );
}

export default ExpensesPage;