
using System;
using System.Collections.Generic;
using System.IO;
using Zignaly.DTO;

namespace Zignaly.Data_Access
{
    public class PhonesData : IPhonesData
    {
        public List<Phones> CreateMockData()
        {
            try
            {
                var currentDirrectory = Directory.GetCurrentDirectory();
                var PhoneList = new List<Phones>();
                Phones apple = new Phones();
                Phones samsung = new Phones();

                apple.id = 1;
                apple.title = "iPhone 12 128GB 5G";
                apple.description = " Super Retina XDR OLED, iOS 14.1, upgradable to iOS 15.3, Apple A14 Bionic (5 nm), 12 MP, f/1.6, 26mm (wide), 1.4µm, dual pixel PDAF, OIS";
                apple.color = "Red";
                apple.Price = "1000 SGD";
                apple.imagedata = File.ReadAllBytes(currentDirrectory+"\\Images\\iPhone_12.jpg");

                samsung.id = 2;
                samsung.title = "Samsung S22 256GB 5G";
                samsung.description = " Dynamic AMOLED 2X, 120Hz, HDR10 +, 1300 nits(peak), Android 12, One UI 4.1, 50 MP, f/1.8, 23mm (wide), 1/1.56, 1.0µm, Dual Pixel PDAF, OIS";
                samsung.color = "Black";
                samsung.Price = "1200 SGD";
                samsung.imagedata = File.ReadAllBytes(currentDirrectory + "\\Images\\Samsung_S22.jpg");

                PhoneList.Add(apple);
                PhoneList.Add(samsung);

                return PhoneList;
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
