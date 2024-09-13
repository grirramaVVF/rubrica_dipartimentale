using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace ApiRubricaDipartimentale.Services
{
    public class WuacService
    {
        private readonly HttpClient _httpClient;

        public WuacService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<T> GetFromWaucAsync<T>(string endpoint)
        {
            var response = await _httpClient.GetAsync(endpoint);
            response.EnsureSuccessStatusCode();

            return await response.Content.ReadFromJsonAsync<T>();
        }

    }
}

