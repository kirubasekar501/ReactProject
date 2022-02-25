using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Zignaly.Data_Access;
using Zignaly.DTO;

namespace Zignaly.Services
{
    public class PhonesService : IPhonesService
    {
        private readonly IPhonesData _phonedata;

        public PhonesService(IPhonesData phonedata)
        {
            _phonedata = phonedata;
        }
        public List<Phones> GetPhonesList()
        {
            try
            {
                return _phonedata.CreateMockData();
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
