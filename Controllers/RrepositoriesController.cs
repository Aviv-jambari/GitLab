using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
namespace GitLab.Controllers
{
    public class RrepositoriesController : Controller
    {
        [HttpPost]
        public string Add(string repository)
        {
            try
            {
                Session["repositories"] = repository as string;
                return JsonConvert.SerializeObject(new { repository = repository, message = "succesfully added a repository" });
            }
            catch (Exception)
            {

                throw;
            }
        }
        public string GetAll()
        {
            try
            {
                string repositories = Session["repositories"] as string;
                return (repositories != null) ? repositories : JsonConvert.SerializeObject(new List<string>());
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}