# TCC-ASP.NETCore-Demo

This web application is a demo project developed using ASP.NET Core Razor Pages. It showcases the development of a web application with a focus on managing class information for Tacoma Community College. The application uses a SQL database for data storage and incorporates various technologies and libraries to provide a rich user experience.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Database](#database)
- [Key Features](#key-features)
- [Configuration](#configuration)
- [Logging](#logging)
- [Security](#security)
- [Deployment](#deployment)
- [Getting Started](#getting-started)
- [License](#license)

## Technologies Used

- **ASP.NET Core**: The primary framework used for building the web application.
- **Razor Pages**: A page-based programming model for building web UI.
- **Entity Framework Core**: An Object-Relational Mapper (ORM) used for database operations.
- **SQLite**: The database engine used for data storage.
- **Bootstrap**: A front-end framework for responsive design and styling.
- **jQuery**: A JavaScript library used for client-side scripting.
- **HTML, CSS, JavaScript**: Standard web technologies used for building the user interface.

## Project Structure

The project follows a standard ASP.NET Core structure with the following key directories and files:

- **Data**: Contains the `ApplicationDbContext` class for database context.
- **Migrations**: Contains migration files for database schema changes.
- **Models**: Contains the `Class` model representing the class entity.
- **Pages**: Contains Razor Pages and their associated page models.
- **wwwroot**: Contains static files such as CSS, JavaScript, and images.

## Database

The application uses SQLite as the database engine. The database context is defined in the `ApplicationDbContext` class, and the `Class` model represents the class entity with properties such as `Id`, `ClassName`, `ClassDescription`, `Units`, and `Quarter`.

## Key Features

1. **Class Management**:
   - Create, update, delete, and view class information.
   - Import class data from a CSV file.
   - Export class data to a CSV file.
   - Delete all class records.

2. **Responsive Design**:
   - The application uses Bootstrap for responsive design, ensuring a consistent user experience across different devices and screen sizes.

3. **Client-Side Scripting**:
   - jQuery is used for client-side scripting, including table sorting and other interactive features.

## Configuration

The application configuration is managed through the `appsettings.json` and `appsettings.Development.json` files. These files contain settings for database connections, logging, and other application-specific configurations.

## Logging

The application uses the built-in logging framework provided by ASP.NET Core. Logging settings are configured in the `appsettings.json` file, and logs are generated for various events and errors.

## Security

The application includes basic security features such as HTTPS redirection and anti-forgery token validation. These features help protect the application from common security threats.

## Deployment

The application can be deployed to any hosting environment that supports ASP.NET Core. The `Properties/launchSettings.json` file contains settings for running the application locally in development mode.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/TCC-ASP.NETCore-Demo.git
   cd TCC-ASP.NETCore-Demo
   ```sh

2. **Install dependencies**:

   ```sh
   dotnet restore
   ```sh

3. **Update the database**:

   ```sh
   dotnet ef database update
   ```sh

4. **Run the application**:

   ```sh
   dotnet run
   ```sh

   ```sh
   dotnet run
   ```sh

5. **Open the application in your browser**:

   Navigate to `https://localhost:<port>` to view the application. The port number can be found in the `Properties/launchSettings.json` file under the `applicationUrl` setting.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
