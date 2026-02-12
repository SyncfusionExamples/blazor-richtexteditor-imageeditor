using Image_Editor_Integration.Components;
using Microsoft.AspNetCore.SignalR;
using Syncfusion.Blazor;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();
// Register Syncfusion Blazor services
// Note: For production use, register your Syncfusion license key:
// Syncfusion.Licensing.SyncfusionLicenseProvider.RegisterLicense("YOUR_LICENSE_KEY");
builder.Services.AddSyncfusionBlazor();
// Configure SignalR HubOptions to allow messages up to 1 MB in size.
// This sets the maximum allowed size for incoming messages (default is ~32 KB).
builder.Services.Configure<HubOptions>(o => o.MaximumReceiveMessageSize = 1024 * 1024);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
