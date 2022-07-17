using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ABM_Fleet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private static List<Vehicle> vehicles = new List<Vehicle>();

        private readonly DataContext context;

        public VehiclesController(DataContext context)
        {
            this.context = context;
        }
    
        [HttpGet]
        public async Task<ActionResult<List<Vehicle>>> Get() 
        {
            return Ok(await context.Vehicles.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicle>> Get(int id)
        {
            var vehicle = await context.Vehicles.FindAsync(id);
            if (vehicle == null)
                return BadRequest("Vehicle not found.");
            return Ok(vehicle);
        }

        [HttpPost]

        // En la request, hay que sacarle el ID, por qué?? 

        public async Task<ActionResult<List<Vehicle>>> AddVehicle(Vehicle entry)
        {
            context.Vehicles.Add(entry);
            await context.SaveChangesAsync();

            return Ok(await context.Vehicles.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Vehicle>>> UpdateVehicle(Vehicle update)
        {
            var dbvehicle = await context.Vehicles.FindAsync(update.Id);
            if (dbvehicle == null)
                return BadRequest("Vehicle not found.");

            dbvehicle.TypeName = update.TypeName;
            dbvehicle.Brand = update.Brand;
            dbvehicle.Model = update.Model;
            dbvehicle.Patent = update.Patent;
            dbvehicle.ChassisNumber = update.ChassisNumber;

            await context.SaveChangesAsync();

            return Ok(await context.Vehicles.ToListAsync());
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult<List<Vehicle>>> Delete(int id)
        {
            var dbvehicle = await context.Vehicles.FindAsync(id);
            if (dbvehicle == null)
                return BadRequest("Vehicle not found.");

            context.Vehicles.Remove(dbvehicle);
            await context.SaveChangesAsync();

            return Ok(await context.Vehicles.ToListAsync());
        }
    }
}
