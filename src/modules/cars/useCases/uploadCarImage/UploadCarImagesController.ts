import { Request, response, Response } from "express";
import { container } from "tsyringe";

import UploadCarImagesUseCase from "./UploadCarImagesUseCase";

interface IFiles {
  filename: string;
}

export default class UploadCarImageController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: car_id } = request.params;
    const images = request.files as IFiles[];
    const images_name = images.map(({ filename }) => filename);
    const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase);

    await uploadCarImagesUseCase.execute({
      car_id,
      images_name,
    });

    return response.status(201).send();
  }
}
