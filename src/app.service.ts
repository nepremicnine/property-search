import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service';
import { Filter } from './filters.model';

@Injectable()
export class AppService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async getProperties(filters: Filter) {
    return this.supabaseService.fetchProperties(filters);
  }

}
