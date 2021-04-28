# Car registration

**RF**
- [x] It must be possible to register a new car.
- [x] It must be possible to list all categories.

**RN**
- [x] It must not be possible to register a car with an existing license plate.
<!-- - It must not be possible to change the license plate of a car already registered. -->
- [x] The car must be registered, by default, with availability.
- [x] The user responsible for the registration must be an administrator.

# List of cars

**RF**
- [x] It must be possible to list all available cars by category name.
- [x] It must be possible to list all available cars.
- [x] It must be possible to list all available cars by brand.
- [x] It must be possible to list all available cars by car name.

**RN**
- [x] The user does not need to be logged into the system.

# Car Specification Registration

**RF**
- [ ] It must be possible to register a specification for a car.
- [ ] It must be possible to list all specifications.
- [ ] It must be possible to list all cars.

**RN**
- [] It must not be possible to register a specification for an unregistered car.
- [] It must not be possible to register a specification already registered for the same car.
- [] The user responsible for the registration must be an administrator.

# Car Images Registration

**RF**
- It must be possible to register a car's image.
- It must be possible to list all cars.

**RNF**
- To use the multer for file uploads.

**RN**
- The user must be possible to register multiple images for the same car.
- The user responsible for the registration must be an administrator.

# Car Rentals

**RF**
- It must be possible to register a rental.

**RN**

- The rental must be have a minimal 24 hours of duration.
- It must not be possible to register a new rental if already exists another open to the same user.
- It must not be possible to register a new rental if already exists another open to the same car.