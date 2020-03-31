using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace WpfApp1
{

    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        readonly List<Member> list = new List<Member>();
        public MainWindow()
        {
            InitializeComponent();
        }

        private void buttonRegister_Click(object sender, RoutedEventArgs e)
        {
            Member member = new Member();
            member.NAME = textBoxName.Text;
            member.PHONE = textBoxPhone.Text;

            list.Add(member);
            labelNumberOfMember.Content = list.Count;
        }

        private void buttonSearch_Click(object sender, RoutedEventArgs e)
        {
            foreach (Member item in list)
            {
                if (item.NAME == textBoxSearchName.Text)
                {
                    labelSearchedPhone.Content = item.PHONE;
                    return;
                }
            }
            labelSearchedPhone.Content = "그런 이름 없음";

        }
    }
}
