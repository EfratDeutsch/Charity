﻿using Microsoft.AspNetCore.Mvc;
using Entities;
using Services;
using AutoMapper;
using DTO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CharityProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly ILoanService _loanService;
        private readonly IMapper _mapper;

        public LoanController(ILoanService loanService,IMapper mapper)
        {
            _loanService = loanService;
            _mapper = mapper;
        }
        // GET: api/<LoanController>
        [HttpGet]
        public async Task <ActionResult<List<LoanDTO>>> Get()
        {
            List<Loan> list = await _loanService.getNotReturnedItem();
            List<LoanDTO> mylist = _mapper.Map<List<LoanDTO>>(list);
            if (mylist != null)
                return mylist;
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
        public async Task<ActionResult<LoanDTO>> Post([FromBody] LoanDTO loan)
        {
            Loan loandto = _mapper.Map<LoanDTO, Loan>(loan);
            Loan newLoan =await _loanService.addLoan(loandto);
            LoanDTO myLoan = _mapper.Map<Loan, LoanDTO>(newLoan);

            if (myLoan != null)
                return myLoan;
            else return Ok(myLoan);
            

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
