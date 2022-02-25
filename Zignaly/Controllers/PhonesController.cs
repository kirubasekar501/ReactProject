using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Zignaly.DTO;
using Zignaly.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Zignaly.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhonesController : ControllerBase
    {
        private readonly IPhonesService _phoneservice;

        public PhonesController(IPhonesService phoneservice)
        {
            _phoneservice = phoneservice;
        }
        [HttpGet]
        public PhonesResponse Get()
        {
            PhonesResponse phonesresponse = new PhonesResponse();
            phonesresponse.response = _phoneservice.GetPhonesList();
            System.Threading.Thread.Sleep(3000);
            return phonesresponse;
        }

    }
}
