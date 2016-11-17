import { AppModule } from "./app.module";
import {forwardRef } from "@angular/core";
import { UpgradeAdapter } from "@angular/upgrade";

export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));