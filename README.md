If you have any question or clarification please create an issue on the main repository.

## Please read very carefully
### What do we expect? ✔️

That you are able to:
- ✔️Code in OOP.
- ✔️Explain the time complexity of your algorithm.
- ✔️Use git and github, create nested pull requests.
- ✔️Make small commits with good commit message. We are more interested on your thought processes and steps you took over the final code you are submitting.
- ✔️That you can write effective unit tests and cover all the examples computation on the requirements.
- ✔️Use atleast 1 design pattern as part of your final code - https://www.oodesign.com/
- ✔️Create a working REST API - https://en.wikipedia.org/wiki/Representational_state_transfer
- ✔️Use postman to discuss and demo your API - https://www.postman.com/
- ✔️CRUD for your chosen database
- ✔️Use .gitignore file

### Requirements 📝
please create 1 feature branch to include all requirements with multiple commits.

### Important
Do not use squash commit. All the single commit should be retain.


**1. You are tasked to create a Node.js with nestjs function `generate_monthly_payslip` to compute a monthly payslip of an individual based on his annual salary with 2 decimal places with unit tests.**

Example:

When you give an argument of "Ren" and "60000"

`generate_monthly_payslip "Ren" 60000`

Then it will return an output in console:

```
 Monthly Payslip for: "Ren"
 Gross Monthly Income: $5000.00
 Monthly Income Tax: $500.00
 Net Monthly Income: $4500.00
```

### Important
We are expecting more than an `if else` statements and `hard coded values`. Please design the function to be **extensible**. We may require to change the tax bracket on the day of the interview.

### The Tax Bracket is as follows

| Salary Bracket | Rate |
|----------|:-------------:|
| first 0 - 20000 | 0% |
| next 20001-40000 | 10% |
| next 40001-80000 | 20% |
| next 80001-180000 | 30% |
| 180001 and above | 40% |

### Sample Tax Computation 1

Annual Salary 60000

| Salary Bracket | Rate | Taxable Amount | Total Tax |
|---|---|---|---|
| first 0 - 20000 | 0% | 20000 | 0 |
| next 20001-40000 | 10% | 20000 | 2000 |
| next 40001-80000 | 20% | 20000 | 4000 |
| next 80001-180000 | 30% | 0 | 0 |
| 180001 and above | 40% | 0 | 0 |
| **Total** | | 60000 | 6000 |

### Sample Tax Computation 2

Annual Salary 200000

| Salary Bracket | Rate | Taxable Amount | Total Tax |
|---|---|---|---|
| first 0 - 20000 | 0% | 20000 | 0 |
| next 20001-40000 | 10% | 20000 | 2000 |
| next 40001-80000 | 20% | 40000 | 8000 |
| next 80001-180000 | 30% | 100000 | 30000 |
| 180001 and above | 40% | 20000 | 8000 |
| **Total** | | 200000 | 48000 |

### Sample Tax Computation 3

Annual Salary 80150

| Salary Bracket | Rate | Taxable Amount | Total Tax |
|---|---|---|---|
| first 0 - 20000 | 0% | 20000 | 0 |
| next 20001-40000 | 10% | 20000 | 2000 |
| next 40001-80000 | 20% | 40000 | 8000 |
| next 80001-180000 | 30% | 150 | 45 |
| 180001 and above | 40% | 0 | 0 |
| **Total** | | 80150 | 10045 |

**2. Create a `POST` REST API request to expose your function. Request parameters should include employee_name and annual_salary. The response body should return JSON format. Add unit tests where you think its relevant.**
You can use:
- Java 
- C# with .NET
- C++
```
{
  "employee_name": string,
  "gross_monthly_income": string,
  "monthly_income_tax": string,
  "net_monthly_income": string,
}
```

**3. When compute monthly salary POST API is invoked, Then write the following information in a database of your choice, you can use any local or cloud database**
- Timestamp
- Employee Name
- Annual Salary
- Monthly Income Tax

**4. Create a GET API to list out all information from Requirement 3 on JSON Format:**
- unit tests where you think its relevant
```
{
  salary_computations: [
    {
      "time_stamp": string,
      "employee_name": string
      "annual_salary": string
      "monthly_income_tax": string
    }
  ]
}
```

**5. [Extra] You can implement any feature related to the APIs you just created**
Some ideas:
- Build a Simple UI Form to enter transactions
- Generate a CSV
- Add a Github Action to automate running the unit test
- Hook a free CI
- Deploy to Heroku
I'll be more impressed if you do something else not listed on this list
For this section you can invent your own requirement

## Instructions ✔️

Please come prepared to the code review about your approach:
- [ ] What is the time complexity of your algorithm?
- [ ] What design pattern you used?
- [ ] What is your approach on creating unit tests?
- [ ] What is the difference of unit tests and integration tests?
- [ ] Why did you pick the database you used for this take home exam?
- [ ] What did you learn from this take home exam?
