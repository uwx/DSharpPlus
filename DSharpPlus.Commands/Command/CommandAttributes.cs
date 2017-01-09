using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DSharpPlus.Commands
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, Inherited = false, AllowMultiple = true)]
    public class GroupAttribute : Attribute
    {
        readonly string group;
        public GroupAttribute(string Group) { this.group = Group; }
        public string Group { get { return group; } }
    }

    [AttributeUsage(AttributeTargets.Method, Inherited = false, AllowMultiple = true)]
    public class CommandAttribute : Attribute
    {
        public CommandAttribute() { }
    }

    [AttributeUsage(AttributeTargets.Parameter, Inherited = false, AllowMultiple = true)]
    public class MultiAttribute : Attribute
    {
        public MultiAttribute() { }
    }
}
