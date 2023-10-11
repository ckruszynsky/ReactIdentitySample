using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    /// <summary>
    /// Represents a model for account login requests. 
    /// This model is used when a user attempts to log in.
    /// </summary>
    public class AccountLoginRequestModel
    {
        /// <summary>
        /// Gets or sets the username for the login request. 
        /// This is the unique identifier for each user.
        /// This property is required.
        /// </summary>
        [Required]
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets the password for the login request. 
        /// This property is required.
        /// </summary>
        [Required]
        public string Password { get; set; }       
    }
}
