using AutoMapper;
using CharityProject;
using Entities;
using Microsoft.EntityFrameworkCore;
using Services;
using Repository;


var builder = WebApplication.CreateBuilder(args);

string homeConnectionString = "Data Source=DESKTOP-IO6UM71;Initial Catalog=Charity;Integrated Security=True;TrustServerCertificate=True;";
string schoolConnectionString = "Data Source=srv2\\pupils;Initial Catalog=Charity;Integrated Security=True;TrustServerCertificate=True;";

// Add services to the container

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<ICategoryRepository, CategoryRepository>();
builder.Services.AddScoped<ILoanService, LoanService>();
builder.Services.AddScoped<ILoanRepository, LoanRepository>();
builder.Services.AddScoped<ICharityService, CharityService>();
builder.Services.AddScoped<ICharityRepository, CharityRepository>();
builder.Services.AddScoped<ICityService, CityService>();
builder.Services.AddScoped<ICityRepository, CityRepository>();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

//var mapperConfig = new MapperConfiguration(mc =>
//{
//    mc.AddProfile(new MappingProfile());
//});

//IMapper mapper = mapperConfig.CreateMapper();


builder.Services.AddControllers();

builder.Services.AddDbContext<CharityContext>(options =>options.UseSqlServer(homeConnectionString));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
