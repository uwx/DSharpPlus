using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DSharpPlus.Commands
{
    public class CommandModule : IModule
    {
        internal static CommandModule instance;

        internal CommandConfig config { get; set; }

        public DiscordClient Client { get; internal set; }

        public List<CommandGroup> Groups { get; internal set; } = new List<CommandGroup>();

        public CommandModule()
        {
            config = new CommandConfig();

            instance = this;
        }

        public CommandModule(CommandConfig config)
        {
            this.config = config;

            instance = this;
        }

        public void Setup(DiscordClient client)
        {
            Client = client;

            Client.MessageCreated += (sender, e) =>
            {
                // TODO
            };
        }

        public void AddCommands(CommandGroup Commands)
        {
            if (Commands.GetType() == typeof(CommandGroup))
            {
                Client.DebugLogger.LogMessage(LogLevel.Error, "Command", $"You cant add the CommandGroup", DateTime.Now);
                return;
            }

            Groups.Add(Commands);
            string GroupPrefix = "";
            Type group = Commands.GetType();
            foreach (var attribute in group.GetCustomAttributes(true))
            {
                Client.DebugLogger.LogMessage(LogLevel.Debug, "Command", $"Class Attribute: {attribute.GetType().Name}", DateTime.Now);
                if (attribute.GetType() == typeof(GroupAttribute))
                {
                    GroupPrefix = ((GroupAttribute)attribute).Group.Trim() + " ";
                    break;
                }
            }
            foreach (var method in group.GetMethods())
            {
                if (method.GetCustomAttributes(true).Count(x => x.GetType() == typeof(CommandAttribute)) == 0)
                    continue;

                Command cmd = new Command();
                cmd.MappedName += GroupPrefix;
                if (method.GetCustomAttributes(true).Count(x => x.GetType() == typeof(GroupAttribute)) > 0)
                    cmd.MappedName += (method.GetCustomAttributes(true).First(x => x.GetType() == typeof(GroupAttribute)) as GroupAttribute).Group.Trim() + " ";
                cmd.MappedName += method.Name;

                Client.DebugLogger.LogMessage(LogLevel.Debug, "Command", $"Found Command: \"{cmd.MappedName}\"", DateTime.Now);

                method.Invoke(Commands, new object[] { "" });
                method.Invoke(Commands, new object[] { "optional parameter test" });
            }
        }
    }
}
