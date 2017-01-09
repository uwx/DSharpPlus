using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DSharpPlus.Commands
{
    public static class CommandExtension
    {
        public static DiscordClient UseCommands(this DiscordClient client)
        {
            client.AddModule(new CommandModule());

            return client;
        }

        public static DiscordClient UseCommands(this DiscordClient client, CommandConfig config)
        {
            client.AddModule(new CommandModule(config));

            return client;
        }

        public static CommandModule GetCommandModule(this DiscordClient client)
        {
            return client.GetModule<CommandModule>();
        }

        public static void AddCommands(this DiscordClient client, CommandGroup Commands) => client.GetCommandModule().AddCommands(Commands);
    }
}
