using System.Collections.Generic;

namespace Zignaly.DTO
{
    public class PhonesResponse
    {
        public PhonesResponse()
        {
            this.response = new List<Phones>();
            this.status = new Status();
            this.status.message = null;
            this.status.statuscode = "SUCCESS";
        }
        public List<Phones> response { get; set; }
        public Status status { get; set; }
    }
}
