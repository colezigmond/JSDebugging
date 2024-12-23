function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

// Initiate vacation days
let totalVacationDays = 0;

// Loop until the vacation days reach 20
for (let i = 1; i <= 20; i++) {
    try {
        console.log("Mission ${i}:");
        mysteryOperation();
        // If successful, add 13 days
        totalVacationDays += 13;
    } catch (error) {
        console.error(error.message);
        // If failed, add 1 day
        totalVacationDays += 1;
    }finally {
        // Add 3 days for attendance in all cases
        totalVacationDays += 3;
    }
}

// Print total vacation days
console.log(`Total vacation days: ${totalVacationDays}`);