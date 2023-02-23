﻿using Microsoft.AspNetCore.Mvc;
using Entities;
using Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly ILoanService _loanService;

        public LoanController(ILoanService loanService)
        {
            _loanService = loanService;
        }
        // GET: api/<LoanController>
        [HttpGet]
        public async Task <ActionResult<List<Loan>>> Get()
        {
            List<Loan> list = await _loanService.getNotReturnedItem();
            if (list != null)
                return list;
            else return StatusCode(204);
        }

        // GET api/<LoanController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LoanController>
        [HttpPost]
        public async Task<ActionResult<Loan>> Post([FromBody] Loan loan)
        {
            Loan newLoan =await _loanService.addLoan(loan);

            if (newLoan != null)
                return newLoan;
            else return Ok(newLoan);
            

        }

        // PUT api/<LoanController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoanController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
