import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

interface Temple {
  name: string;
  imageUrl: string;
  cardInfo: any;
}

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private storageKey = 'favoritePlaces';
  private favorites: { name: string; imageUrl: string; cardInfo: any; removed?: boolean }[] = [];

  constructor(private toastController: ToastController) {
    const storedFavorites = localStorage.getItem(this.storageKey);
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  private saveFavorites(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  toggleFavorite(temple: Temple): void {
    const index = this.favorites.findIndex((favorite) => favorite.name === temple.name);

    if (index !== -1) {
      this.removeFromFavorites(temple.name);
    } else {
      this.addToFavorites({
        name: temple.name,
        imageUrl: temple.imageUrl,
        cardInfo: temple.cardInfo,
      });
    }
  }

  addToFavorites(favorite: { name: string; imageUrl: string; cardInfo: any }): void {
    this.favorites.push(favorite);
    this.saveFavorites();
    this.presentToast(`${favorite.name} added to favorites`);
  }

  removeFromFavorites(place: string): void {
    const index = this.favorites.findIndex((favorite) => favorite.name === place);

    if (index !== -1) {
      this.favorites.splice(index, 1);
      this.saveFavorites();
      this.presentToast(`${place} removed from favorites`);
    }
  }

  isFavorite(place: string): boolean {
    return this.favorites.some((favorite) => favorite.name === place);
  }

  getFavorites(): { name: string; imageUrl: string; cardInfo: any; removed?: boolean }[] {
    return this.favorites.filter((favorite) => !favorite.removed);
  }
}