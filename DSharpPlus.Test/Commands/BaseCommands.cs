using DSharpPlus.Commands;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DSharpPlus.Test.Commands
{
    [Group("base")]
    public class BaseCommands : CommandGroup
    {
        [Group("test"), Command]
        public async Task Help([Multi] string Command = "")
        {
            //await Environment.Channel.SendMessage($"Yee works. Additional multi parameter: ``{Command}``");
            await Task.Run(() =>
            {
                Console.WriteLine($"Yee works. Additional multi parameter: \"{Command}\"");
            });
        }
    }
}
