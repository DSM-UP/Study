using System;
using System.Collections.Generic;
using System.Text;

namespace WpfApp1
{
    class Member
    {
        private String Name;
        private String Phone;

        public String NAME
        {
            get { return Name; }
            set { Name = value; }
        }

        public String PHONE
        {
            get { return Phone; }
            set { Phone = value; }
        }
    }
}
